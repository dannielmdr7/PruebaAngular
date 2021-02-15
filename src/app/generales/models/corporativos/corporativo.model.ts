export interface CorporativoModel {
    data: Corporativo[];
  }
  
  export interface Corporativo {
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
    user_created: Usercreated;
    asignado: Usercreated;
  }
  
  export interface Usercreated {
    id: number;
    username: string;
    email: string;
    S_Nombre: string;
    S_Apellidos: string;
    S_FotoPerfilURL: string;
    S_Activo: number;
    verification_token: string;
    verified: string;
    tw_role_id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: any;
  }