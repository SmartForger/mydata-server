import { getCompany, getStage, getContractsFromEmail } from './utils'

export default {
  Company: getCompany,
  Stage: getStage('stage_id'),
  Contracts: getContractsFromEmail
}