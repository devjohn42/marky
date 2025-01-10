import {
  appDirectoryName,
  fileEnconding,
  welcomeFileName,
} from '@shared/constants'
import { NoteInfo } from '@shared/models'
import {
  CreateNote,
  DeleteNote,
  GetNotes,
  ReadNote,
  WriteNote,
} from '@shared/types'
import { dialog } from 'electron'
import { ensureDir, readdir, remove, stat, writeFile } from 'fs-extra'
import { readFile } from 'fs/promises'
import { homedir } from 'os'
import * as path from 'path'
import { isEmpty } from 'lodash'
import welcome from '../../../resources/welcome.md?asset'

export const getRootDir = () => {
  return path.join(homedir(), appDirectoryName)
}

export const createNote: CreateNote = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New note',
    defaultPath: `${rootDir}/Untitled.md`,
    buttonLabel: 'Create',
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown', extensions: ['md'] }],
  })

  if (canceled || !filePath) {
    console.info('Note creation canceled')
    return false
  }

  const { name: filename, dir: parentDir } = path.parse(filePath)

  if (parentDir !== rootDir) {
    await dialog.showMessageBox({
      type: 'error',
      title: 'Creation failed',
      message: `All notes must be saved under ${rootDir}. Avoid using other directories!`,
    })

    return false
  }

  console.info(`Creating note: ${filePath}`)
  await writeFile(filePath, '')

  return filename
}

export const deleteNote: DeleteNote = async (filename) => {
  const rootDir = getRootDir()

  const { response } = await dialog.showMessageBox({
    type: 'warning',
    title: 'Delete Note',
    message: `Are you sure you want to delete ${filename}`,
    buttons: ['Delete', 'Cancel'], // 0 Delete | 1 Cancel
  })

  if (response === 1) {
    console.info('Note delection canceled')
    return false
  }

  console.log(`Deleting note: ${filename}`)

  await remove(`${rootDir}/${filename}.md`)

  return true
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const notesFileName = await readdir(rootDir, {
    encoding: fileEnconding,
    withFileTypes: false,
  })

  const notes = notesFileName.filter((fileName) => fileName.endsWith('.md'))

  if (isEmpty(notes)) {
    console.info('Notes note found, creating a welcome note')

    const content = await readFile(welcome, { encoding: fileEnconding })

    await writeFile(`${rootDir}/${welcomeFileName}`, content, {
      encoding: fileEnconding,
    })

    notes.push(welcomeFileName)
  }

  return Promise.all(notes.map(getNoteInfoFromFileName))
}

const getNoteInfoFromFileName = async (filename: string): Promise<NoteInfo> => {
  const filePath = path.join(getRootDir(), filename)
  const fileStats = await stat(filePath)

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs,
  }
}

export const readNote: ReadNote = async (filename) => {
  const rootDir = getRootDir()

  return readFile(`${rootDir}/${filename}.md`, { encoding: fileEnconding })
}

export const writeNote: WriteNote = async (filename, content) => {
  const rootDir = getRootDir()

  console.info(`Writing note ${filename}`)

  return writeFile(`${rootDir}/${filename}.md`, content, {
    encoding: fileEnconding,
  })
}
