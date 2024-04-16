import { Component } from '@angular/core'
import { lastValueFrom } from 'rxjs'
import { HttpClient } from '@angular/common/http'

type PostType = Omit<Post, 'id'>

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

@Component({
  selector: 'app-http-client',
  standalone: true,
  styleUrl: './http-client.component.css',
  templateUrl: './http-client.component.html',
})
export class HttpClientComponent {
  posts: PostType[] = []

  constructor(private readonly httpClient: HttpClient) {}

  async getData() {
    this.posts = await lastValueFrom(this.httpClient.get<PostType[]>('posts'))
  }
}
