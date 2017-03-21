import {Component} from '@angular/core';
import { CommentService } from './commentService';
import { Observable } from 'rxjs/Rx';
import {Comment} from './comment';

@Component({
	selector:'add',
	template: `
	
           
                
                    <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
                    <input type="text" class="form-control" placeholder="NAME" [(ngModel)]="model.name" name="name">
               <input type="text" class="form-control" placeholder="ID" [(ngModel)]="model.id" name="id">
                
                <button  type="button" class="btn btn-primary btn-block" (click)="addComment()">Add</button>
  			
            
       `
})

export class AddComponent
{
	
	private model = new Comment('','');
	
		public name: string;
		constructor(private cs: CommentService)
		{

		}
	addComment(){
	 	
		 this.cs.addComment(this.model)
		 .subscribe(comments => {
			this.model = new Comment('', '');
		},
			 err => {
				 // Log errors if any
				 console.log(err);
			 });

		console.log("pressed add:" + this.model.name);
		

}
}