export interface competicao{
  id_competicao: number,
  local_competicao: string,
  horario: string,
  limk_img_localCompeticao: string,
  categoria: string,
  esporte: string,
  juizes: string[],
  participantes: string[]
}

export interface podio{
  id_competicao: number,
  local_competicao: string,
  horario: string,
  limk_img_localCompeticao: string,
  categoria: string,
  esporte: string,
  ouro: string,
  link_ouro: string,
  prata: string,
  link_prata: string,
  bronze: string,
  link_bronze: string
}
