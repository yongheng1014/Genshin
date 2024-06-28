import { MysUtil } from '#MysTool/mys'
import { Cfg, getDir } from '#MysTool/utils'
import './model/mys/ApiMap.js'

MysUtil.addGames('gs', '原神')

const dir = getDir(import.meta.url)
Cfg.initCfg('/lib/components', dir.name + '/', 'gs')

/** 初始化数据目录 */
for (const path of ['LedgerData', 'GachaData', 'PlayerData']) {
  Data.createDir(`${dir.name}/${path}/`, { root: true })
}

/** 导入资源 */
for (const type of ['artifact', 'character', 'material', 'weapon']) {
  await import(`file://${dir.path}/resources/meta/${type}/index.js`)
}

export * from './Apps/calculator.js'
export * from './Apps/explore.js'
export * from './Apps/gachaLog.js'
export * from './Apps/ledger.js'
export * from './Apps/materialPack.js'
export * from './Apps/profile.js'
export * from './Apps/role.js'
