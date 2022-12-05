import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { Dropdown } from 'src/app/shared/models/dropdown.model';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Sort } from 'src/app/shared/models/sort.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss'],
})
export class IdeasComponent implements OnInit {
  paginationOptions: Dropdown[] = [
    {
      value: '10',
      label: '10',
    },
    {
      value: '20',
      label: '20',
    },
    {
      value: '50',
      label: '50',
    },
  ];
  selectedPagination = '10';
  sortOptions: Dropdown[] = [
    {
      value: '-published_at',
      label: 'Newest',
    },
    {
      value: 'published_at',
      label: 'Oldest',
    },
  ];
  selectedSort = '-published_at';
  posts: Post[] = [];
  pagination: Pagination = {
    page: 1,
    collectionSize: 0,
    pageSize: 10,
  };
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    if (!!this.postService.getFilterSource()) {
      const filterData = this.postService.getFilterSource()
      this.pagination = filterData.pagination
      this.selectedSort = filterData.sort
      this.selectedPagination = filterData.pagination.pageSize.toString()
    }
    this.fetchPosts();
  }

  fetchPosts() {
    const params = {
      'page[size]': this.pagination.pageSize,
      'page[number]': this.pagination.page,
      append: ['small_image', 'medium_image'],
      sort: this.selectedSort,
    };
    this.postService.getPosts(params).subscribe((resp) => {
      this.posts = resp.data;
      this.pagination.collectionSize = resp.meta.total;
      this.postService.setFilterSource({
        pagination: this.pagination,       
        sort: this.selectedSort,
      });
      this.posts = this.posts.map((post) => ({
        ...post,
        image_url: post?.small_image[0]?.url,
      }));
    });
  }

  onPaginationChange(value: Dropdown['value']) {
    this.selectedPagination = value;
    this.pagination.pageSize = parseInt(value);
    this.fetchPosts();
    this.postService.setFilterSource({
      pagination: this.pagination,     
      sort: this.selectedSort,
    });
  }

  onSortChange(value: Dropdown['value']) {
    this.selectedSort = value;
    this.fetchPosts();
    this.postService.setFilterSource({
      pagination: this.pagination,     
      sort: this.selectedSort,
    });
  }

  onPageChange(value: number) {
    this.pagination.page = value;
    this.fetchPosts();
    this.postService.setFilterSource({
      pagination: this.pagination,     
      sort: this.selectedSort,
    });
  }
}
