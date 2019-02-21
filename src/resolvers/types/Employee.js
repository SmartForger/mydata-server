import { getCompany, getJob, getStage } from './utils'

const getImageFromEmployee = async ({ id }, args, { models }) =>
  models.Images.findOne({
    where: {
      "$Employee.id$": id
    },
    include: [
      {
        model: models.Employees,
        as: "Employee"
      }
    ]
  })

export default {
  Company: getCompany,
  Job: getJob,
  Stage: getStage('stage_id'),
  Image: getImageFromEmployee
}