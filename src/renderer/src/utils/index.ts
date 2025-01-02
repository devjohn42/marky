import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]): string => {
  return twMerge(clsx(...args))
}

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'short',
  timeStyle: 'short',
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)
