import { CommonModule } from '@angular/common';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  listaTareas: string[] = [];
  nuevaTrarea: string = '';

  private _tareasService = inject(TareasService)

  ngOnInit(): void {
    this.listaTareas = this. _tareasService.getTareas();
  }

  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTrarea)  //agregamos una tarea mediante el servicio
    this.nuevaTrarea = '';                              // vaciamos el imput donde escribimos la tarea
    this.listaTareas = this._tareasService.getTareas()  // volvemoa a traer la lista de tareas para mostrar todas
  }

  eliminarTarea(index: number) {                        // pasamos el id
    this._tareasService.eliminarTarea(index);           // elminamos la tarea del id llamado
    this.listaTareas = this._tareasService.getTareas()  // llamos a la lista de tareas actualizada
  }
}
