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
