import objectQuery from './object'

const {
  getObjects: getAttachments,
  getObject: getAttachment
} = objectQuery('Attachments')

const {
  getObjects: getAuditCreates,
  getObject: getAuditCreate
} = objectQuery('AuditCreates')

const {
  getObjects: getAuditStages,
  getObject: getAuditStage
} = objectQuery('AuditStages')

const {
  getObjects: getCompanies,
  getObject: getCompany
} = objectQuery('Companies')

const {
  getObjects: getContracts,
  getObject: getContract
} = objectQuery('Contracts')

const {
  getObjects: getEmails,
  getObject: getEmail
} = objectQuery('Emails')

const {
  getObjects: getEmployees,
  getObject: getEmployee
} = objectQuery('Employees')

const {
  getObjects: getGoals,
  getObject: getGoal
} = objectQuery('Goals')

const {
  getObjects: getImages,
  getObject: getImage
} = objectQuery('Images')

const {
  getObjects: getJobs,
  getObject: getJob
} = objectQuery('Jobs')

const {
  getObjects: getRoles,
  getObject: getRole
} = objectQuery('Roles')

const {
  getObjects: getStages,
  getObject: getStage
} = objectQuery('Stages')

const {
  getObjects: getUsers,
  getObject: getUser
} = objectQuery('Users')

export default {
  getAttachments,
  getAttachment,
  getAuditCreates,
  getAuditCreate,
  getAuditStages,
  getAuditStage,
  getCompanies,
  getCompany,
  getContracts,
  getContract,
  getEmails,
  getEmail,
  getEmployees,
  getEmployee,
  getGoals,
  getGoal,
  getImages,
  getImage,
  getJobs,
  getJob,
  getRoles,
  getRole,
  getStages,
  getStage,
  getUsers,
  getUser
}