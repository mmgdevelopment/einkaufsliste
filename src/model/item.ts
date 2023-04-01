interface Item {
  id: string
  title: string
  status: Status
}

type Status = 'needed' | 'completed'

export { Item }
export { Status }
