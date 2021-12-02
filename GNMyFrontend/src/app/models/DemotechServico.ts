export interface DemotechServico {
  id?: number
  dataInclusao?: Date
  idUserInclusao?: number
  dataAlteracao?: Date
  idUserAlteracao?: number
  observacao?:	string
  isActive:	boolean
  documentName?:	string
  docType?:	string
  docUrl?:	string
  tipoServico:	string
  categoria:	string
  descricao?:	string
}