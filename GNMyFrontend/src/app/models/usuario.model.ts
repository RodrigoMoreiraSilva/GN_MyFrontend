export interface Usuario {
    id?: number
    userName?: string
    password?: string
    role?: string
    passwordExpired?: boolean
    activeDirectoryAuth?: boolean
    numTentativasAcesso?: number
    ldapSection?: string
    dataInclusao?: Date
    idUserInclusao?: number
    dataAlteracao?: Date
    idUserAlteracao?: number
    observacao?: string
    isActive?: boolean
}