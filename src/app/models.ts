export interface competicao{
  id: number,
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

export interface ranking{
  pais: string,
  link_pais_imagem: string,
  ouro: number,
  prata: number,
  bronze: number,
  total: number,
}
