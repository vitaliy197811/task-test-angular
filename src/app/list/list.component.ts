import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api-task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public loading: boolean = false;
  public tasks: any[] = [];
  public search: string = '';
  location: any;

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
    this.location = this.route.snapshot.url.join('/');
  }

  ngOnInit() {
    this.renderTasks();
  }

  handleChange(event: any) {
    this.search = event.target.value.toLowerCase();
  }

  classDone(done: boolean) {
    if (done === true) {
      return done.toString();
    }
    return '';
  }

  async renderTasks() {
    this.loading = true;
    try {
      const tasksData = await this.apiService.getTask;
      console.log(tasksData);
      // this.tasks = tasksData;
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  showVisibleTasks() {
    if (this.tasks) {
      const filteredTasks = this.tasks.filter((task) =>
        task.message.toLowerCase().includes(this.search.toLowerCase())
      );
      return filteredTasks;
    }
    return [];
  }

  navigateToAdd() {
    const currentPath = this.router.url;
    this.router.navigate(['/add'], {
      queryParams: { from: this.route.snapshot.url.join('/') },
    });
    this.router.navigateByUrl(currentPath, { skipLocationChange: true });
  }
}
