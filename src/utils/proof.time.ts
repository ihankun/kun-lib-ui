import { vueSession } from '@yuzheng14/vue-session'

export class ProofTime {
  static format(type = 'yyyy-MM-dd hh:mm:ss') {
    const session = vueSession

    let timeStamp = 0

    const clientDate = new Date().getTime()

    if (session.has('timeStamp')) {
      timeStamp = session.get('timeStamp') || 0
    }

    const currentDate = new Date(clientDate + Number(timeStamp))

    return this._formatData(type, currentDate)
  }

  static proofread(date: string) {
    const session = vueSession

    const serviceTimeStamp = new Date(date).getTime()

    const clientTimsStamp = new Date().getTime()

    const timeStamp = serviceTimeStamp - clientTimsStamp

    if (session.has('timeStamp')) {
      session.remove('timeStamp')
    }

    session.start()
    session.set('timeStamp', timeStamp)
  }

  static _formatData(fmt: string, date: Date) {
    let ret
    const opt: Record<string, string> = {
      'y+': date.getFullYear().toString(),
      'M+': (date.getMonth() + 1).toString(),
      'd+': date.getDate().toString(),
      'h+': date.getHours().toString(),
      'm+': date.getMinutes().toString(),
      's+': date.getSeconds().toString(),
    }
    for (let k in opt) {
      ret = new RegExp('(' + k + ')').exec(fmt)
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
        )
      }
    }
    return fmt
  }
}
