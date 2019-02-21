import { getCompany, getStage } from './utils'

const getContractsFromEmail = async ({ id }, args, { models }) =>
  models.Contracts.findAll({
    where: {
      "$Emails.id$": id
    },
    include: [
      {
        model: models.Emails,
        as: "Emails"
      }
    ]
  })

const getAttachmentsFromEmail = async ({ id }, args, { models }) =>
  models.Attachments.findAll({
    where: {
      "$Email.id$": id
    },
    include: [
      {
        model: models.Emails,
        as: "Email"
      }
    ]
  })

export default {
  Company: getCompany,
  Stage: getStage('stage_id'),
  Contracts: getContractsFromEmail,
  Attachments: getAttachmentsFromEmail
}