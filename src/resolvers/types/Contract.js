import { getCompany } from './utils'

const getEmailsFromContract = async ({ id }, args, { models }) =>
  models.Emails.findAll({
    where: {
      "$Contracts.id$": id
    },
    include: [
      {
        model: models.Contracts,
        as: "Contracts"
      }
    ]
  })

const getJobsFromContract = async ({ id }, args, { models }) =>
  models.Jobs.findAll({
    where: {
      "$Contract.id$": id
    },
    include: [
      {
        model: models.Contracts,
        as: "Contract"
      }
    ]
  })

export default {
  Company: getCompany,
  Emails: getEmailsFromContract,
  Jobs: getJobsFromContract
}