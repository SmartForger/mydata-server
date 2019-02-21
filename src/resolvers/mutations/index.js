import objectMutation from './object'

const {
  createObject: createAttachment,
  deleteObject: deleteAttachment,
  updateObject: updateAttachment
} = objectMutation('Attachments')

const {
  createObject: createAuditCreate,
  deleteObject: deleteAuditCreate,
  updateObject: updateAuditCreate
} = objectMutation('AuditCreates')

const {
  createObject: createAuditStage,
  deleteObject: deleteAuditStage,
  updateObject: updateAuditStage
} = objectMutation('AuditStages')

const {
  createObject: createCompany,
  deleteObject: deleteCompany,
  updateObject: updateCompany
} = objectMutation('Companies')

const {
  createObject: createContract,
  deleteObject: deleteContract,
  updateObject: updateContract,
  linkObject: linkContactsEmails
} = objectMutation('Contracts')

const {
  createObject: createEmail,
  deleteObject: deleteEmail,
  updateObject: updateEmail,
  linkObject: linkEmailsContacts
} = objectMutation('Emails')

const {
  createObject: createEmployee,
  deleteObject: deleteEmployee,
  updateObject: updateEmployee
} = objectMutation('Employees')

const {
  createObject: createEvent,
  deleteObject: deleteEvent,
  updateObject: updateEvent
} = objectMutation('Events')

const {
  createObject: createGoal,
  deleteObject: deleteGoal,
  updateObject: updateGoal
} = objectMutation('Goals')

const {
  createObject: createImage,
  deleteObject: deleteImage,
  updateObject: updateImage
} = objectMutation('Images')

const {
  createObject: createJob,
  deleteObject: deleteJob,
  updateObject: updateJob
} = objectMutation('Jobs')

const {
  createObject: createRole,
  deleteObject: deleteRole,
  updateObject: updateRole
} = objectMutation('Roles')

const {
  createObject: createStage,
  deleteObject: deleteStage,
  updateObject: updateStage
} = objectMutation('Stages')

const {
  createObject: createUser,
  deleteObject: deleteUser,
  updateObject: updateUser
} = objectMutation('Users')

export default {
  createAttachment,
  deleteAttachment,
  updateAttachment,
  createAuditCreate,
  deleteAuditCreate,
  updateAuditCreate,
  createAuditStage,
  deleteAuditStage,
  updateAuditStage,
  createCompany,
  deleteCompany,
  updateCompany,
  createContract,
  deleteContract,
  updateContract,
  linkContractsEmails: linkContactsEmails('Emails'),
  createEmail,
  deleteEmail,
  updateEmail,
  linkEmailsContracts: linkEmailsContacts('Contacts'),
  createEmployee,
  deleteEmployee,
  updateEmployee,
  createEvent,
  deleteEvent,
  updateEvent,
  createGoal,
  deleteGoal,
  updateGoal,
  createImage,
  deleteImage,
  updateImage,
  createJob,
  deleteJob,
  updateJob,
  createRole,
  deleteRole,
  updateRole,
  createStage,
  deleteStage,
  updateStage,
  createUser,
  deleteUser,
  updateUser
}