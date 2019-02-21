import { getCompany, getStage } from './utils'

export default {
  Company: getCompany,
  Stage: getStage('stage_id')
}