import { getCompany } from './utils'

const getEmailsFromStage = async ({ id }, args, { models }) =>
  models.Emails.findAll({
    where: {
      "$Stage.id$": id
    },
    include: [
      {
        model: models.Stages,
        as: "Stage"
      }
    ]
  })

const getEmployeesFromStage = async({ id }, args, { models }) =>
  models.Employees.findAll({
    where: {
      "$Stage.id$": id
    },
    include: [
      {
        model: models.Stages,
        as: "Stage"
      }
    ]
  })

export default {
  Company: getCompany,
  Emails: getEmailsFromStage,
  Employees: getEmployeesFromStage
}