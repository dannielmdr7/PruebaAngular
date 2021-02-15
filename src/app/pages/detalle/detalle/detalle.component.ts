import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorporativosService } from '../../../generales/services/corporativos/corporativos.service';
import { CorporativoSingleModel, Twcontactoscorporativo } from '../../../generales/models/corporativos/corporativosingle.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss','/assets/sass/pages/page-users.scss', '/assets/sass/libs/select.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetalleComponent implements OnInit {
  public user:any;

  public form:FormGroup;
  public formContacto:FormGroup;
  public id;
  public contactos:any[];

  constructor(private activatedRoute: ActivatedRoute,
              private corporativoService: CorporativosService,
              private formBuilder:FormBuilder) {
                this.getUser(this.activatedRoute.snapshot.params.id);
                this.loadForm();
                this.id=this.activatedRoute.snapshot.params.id;
               }

  ngOnInit(): void {
  }
  

  public loadForm(){
    this.form=this.formBuilder.group({
      nombreCorto:new FormControl('',Validators.required),
      nombreCompleto:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required),
      fechaIncorporacion:new FormControl('',Validators.required),
      url:new FormControl('',Validators.required)
    });
    this.formContacto=this.formBuilder.group({
      nombre:new FormControl('',Validators.required),
      comentarios:new FormControl('',Validators.required),
      telefonoMovil:new FormControl('',Validators.required),
      puesto:new FormControl('',Validators.required),
      telefonoFijo:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      id:new FormControl('',Validators.required),
      tw_corporativo_id:new FormControl('',Validators.required)
    });

    this.form.disable();
  }
  


  public getUser(id){
    this.corporativoService.getCorporativo(id).subscribe(res=>{
      this.user=res;
      this.setData(res);
      this.contactos=res.data.corporativo.tw_contactos_corporativo      
      console.log(this.contactos);
    })
  }
  public deleteContacto(id){
    this.corporativoService.deleteContacto(id).subscribe(res=>{
      this.getUser(this.id);
    })
  }
  public updateContacto(){
    let contacto:Twcontactoscorporativo={
      id: this.formContacto.get('id').value,
      S_Nombre:this.formContacto.get('nombre').value ,
      S_Puesto:this.formContacto.get('puesto').value ,
      S_Comentarios:this.formContacto.get('comentarios').value ,
      N_TelefonoFijo:this.formContacto.get('telefonoFijo').value ,
      N_TelefonoMovil:this.formContacto.get('telefonoMovil').value ,
      S_Email:this.formContacto.get('email').value ,
      tw_corporativo_id:this.formContacto.get('tw_corporativo_id').value
      
    }
    this.corporativoService.updateContacto(contacto).subscribe(res=>{
      this.getUser(this.id);
    })
  }

  public setData(data){
    
    this.form.setValue({
      nombreCorto:data.data.corporativo.S_NombreCorto,
      nombreCompleto:data.data.corporativo.S_NombreCompleto,
      status:data.data.corporativo.S_Activo,
      fechaIncorporacion:new Date(data.data.corporativo.created_at ),
      url:data.data.corporativo.S_SystemUrl

    })
  }
  public activarForm(){
    this.form.enable();
    this.getUser(this.id)
  }
  
  public cargarFormContacto(contacto){
    this.formContacto.setValue({
      nombre:contacto.S_Nombre,
      comentarios:contacto.S_Comentarios,
      telefonoMovil:contacto.N_TelefonoMovil,
      puesto:contacto.S_Puesto,
      telefonoFijo:contacto.N_TelefonoFijo,
      email:contacto.S_Email,
      id:contacto.id,
      tw_corporativo_id:contacto.tw_corporativo_id
    })

  }

}
