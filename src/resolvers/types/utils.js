export const getEmail = async ({ email_id }, args, { models }) =>
  models.Emails.findOne({
    where: { id: email_id }
  })

export const getCompany = async ({ company_id }, args, { models }) =>
  models.Companies.findOne({
    where: { id: company_id }
  })

export const getUser = async ({ user_id }, args, { models }) =>
  models.Users.findOne({
    where: { id: user_id }
  })

export const getRole = async ({ role_id }, args, { models }) =>
  models.Roles.findOne({
    where: { id: role_id }
  })


export const getStage = key => async (parent, args, { models }) =>
  models.Stages.findOne({
    where: { id: parent[key] }
  })

export const getEmployee = async ({ employee_id }, args, { models }) =>
  models.Employees.findOne({
    where: { id: employee_id }
  })

export const getJob = async ({ job_id }, args, { models }) =>
  models.Jobs.findOne({
    where: { id: job_id }
  })

export const getContract = async ({ contract_id }, args, { models }) =>
  models.Contracts.findOne({
    where: { id: contract_id }
  })

export const getEmailsFromContract = async ({ id }, args, { models }) =>
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

export const getContractsFromEmail = async ({ id }, args, { models }) =>
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