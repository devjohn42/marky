import { appDirectoryName, fileEnconding } from '@shared/constants'
import { NoteInfo } from '@shared/models'
import { GetNotes } from '@shared/type'
import { ensureDir, readdir, stat } from 'fs-extra'
import { homedir } from 'os'
import * as path from 'path'

export const getRootDir = () => {
  return path.join(homedir(), appDirectoryName)
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const notesFileName = await readdir(rootDir, {
    encoding: fileEnconding,
    withFileTypes: false,
  })

  const notes = notesFileName.filter((fileName) => fileName.endsWith('.md'))

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
