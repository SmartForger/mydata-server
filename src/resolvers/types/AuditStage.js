import { getCompany, getStage, getUser, getEmployee } from './utils'

export default {
  Employee: getEmployee,
  Company: getCompany,
  FromStage: getStage('from_stage_id'),
  ToStage: getStage('to_stage_id'),
  User: getUser
}