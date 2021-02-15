export interface CorporativoSingleModel {
    data: CorporativoSingle;
  }
  
export interface CorporativoSingle {
    id: number;
    S_NombreCorto: string;
    S_NombreCompleto: string;
    S_LogoURL: string;
    S_DBName: string;
    S_DBUsuario: string;
    S_SystemUrl: string;
    S_Activo: number;
    D_FechaIncorporacion: string;
    created_at: string;
    updated_at: string;
    tw_users_id: number;
    FK_Asignado_id: number;
    tw_empresas_corporativo: Twempresascorporativo[];
    tw_contactos_corporativo: Twcontactoscorporativo[];
    tw_contratos_corporativo: Twcontratoscorporativo[];
    tw_documentos_corporativo: Twdocumentoscorporativo[];
  }
  
  export interface Twdocumentoscorporativo {
    id: number;
    tw_corporativo_id: number;
    tw_documento_id: number;
    S_ArchivoUrl?: any;
    created_at: string;
    updated_at: string;
    tw_documento: Twdocumento;
  }
  
  export interface Twdocumento {
    id: number;
    S_Nombre: string;
    N_Obligatorio: number;
    S_Descripcion: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface Twcontratoscorporativo {
    id: number;
    D_FechaInicio: string;
    D_FechaFin: string;
    S_URLContrato: string;
    created_at: string;
    updated_at: string;
    tw_corporativo_id: number;
  }
  
  export interface Twcontactoscorporativo {
    id: number;
    S_Nombre: string;
    S_Puesto: string;
    S_Comentarios: string;
    N_TelefonoFijo: number;
    N_TelefonoMovil: number;
    S_Email: string;
    created_at?: string;
    updated_at?: string;
    tw_corporativo_id: number;
  }
  
  export interface Twempresascorporativo {
    id: number;
    S_RazonSocial: string;
    S_RFC: string;
    S_Pais: string;
    S_Estado: string;
    S_Municipio: string;
    S_ColoniaLocalidad: string;
    S_Domicilio: string;
    N_CodigoPostal: number;
    S_UsoCFDI: string;
    S_UrlRFC?: any;
    S_UrlActaConstitutiva?: any;
    S_Activo: number;
    S_Comentarios?: any;
    created_at: string;
    updated_at: string;
    tw_corporativo_id: number;
  }