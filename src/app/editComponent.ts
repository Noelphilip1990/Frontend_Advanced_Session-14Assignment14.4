import {Component} from '@angular/core';
@Component({
	selector:'edit',
	template: `
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
                    <input type="text" class="form-control" placeholder="Author" [(ngModel)]="name" name="author">
                </div>
                <br />
                
                <br />
                <button  type="submit" class="btn btn-primary btn-block">Add</button>
  
            </div>
        `
})
export class EditComponent
{

}