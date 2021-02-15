import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { DatatableComponent, ColumnMode } from "@swimlane/ngx-datatable";
import { usersListData } from "./data/users-list.data";
import { CorporativosService } from '../../generales/services/corporativos/corporativos.service';


@Component({
  selector: 'app-corporativos',
  templateUrl: './corporativos.component.html',
  styleUrls: ['./corporativos.component.scss','/assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None,
})



export class CorporativosComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // row data
  public rows;
  public ColumnMode = ColumnMode;
  public limitRef = 10;

  // column header
  public columns = [
    { name: "D_FechaIncorporacion", prop: "D_FechaIncorporacion" },
    { name: "S_LogoURL", prop: "S_LogoURL" },
    { name: "asignado.S_Nombre", prop: "asignado.S_Nombre" },
    { name: "S_NombreCorto", prop: "S_NombreCorto" },
    { name: "S_NombreCompleto", prop: "S_NombreCompleto" },
    { name: "S_SystemUrl", prop: "S_SystemUrl" },
    { name: "created_at", prop: "created_at" },
    { name: "S_Activo", prop: "S_Activo" },
  ];
  // private
  private tempData = [];
  constructor( private corporativoService:CorporativosService ) {
    this.corporativoService.listCorporativos().subscribe(async res=>{
      this.tempData = await res.data;
      this.rows= await res.data;
      console.log(res);
      
    });
    
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.Username.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * updateLimit
   *
   * @param limit
   */
  updateLimit(limit) {
    this.limitRef = limit.target.value;
  }
  ngOnInit(): void {
    this.corporativoService.listCorporativos().subscribe(async res=>{
      this.tempData = await res.data;
      this.rows= await res.data;
      console.log(res);
      
    })
    
  }

}
