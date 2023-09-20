// type error
// class Post {
//   constructor(id: number, title: string) {
//     this.id = id;
//     this.title = title;
//   }

//   getPost() {
//     return `postId: ${this.id}, postTitle: ${this.title}.`;
//   }
// }

// let post: Post = new Post(1, "title 1");

// 수정
// class Post {
//   id: number; // 속성 type 지정. public default
//   title: string;
//   constructor(id: number, title: string) {
//     this.id = id;
//     this.title = title;
//   }

//   getPost() {
//     return `postId: ${this.id}, postTitle: ${this.title}.`;
//   }
// }

// let post: Post = new Post(1, "title 1");


// 상속
// class PostB extends Post {
//     getPost() {
//         return this.title;
//     }
// }

// 수정2
class Post {
  constructor(
    public id: number = 0, // public은 생략할 수없고 default값 넣을수있다.
    protected title: string
  ) {}

  getPost() {
    return `postId: ${this.id}, postTitle: ${this.title}.`;
  }
}