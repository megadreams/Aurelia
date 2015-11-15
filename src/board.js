import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Board {
  heading = '掲示板';

  ///// 掲示板一覧ページ
  /**
   * 掲示板一覧
   */
  boradList: [];

  ///// 掲示板詳細ページ
  /**
  * 掲示板に表示する詳細リスト
  */
  boardDetail: {};


  constructor() {
    console.log('constructor');
    this.boradList = [
      {
        href: '#board/1',
        title: '掲示板1'
      },
      {
        href: '#board/2',
        title: '掲示板2'
      },
      {
        href: '#board/3',
        title: '掲示板3'
      }
    ];


    // APIを元に取得するデータ
    this.config = [
      {
        boradId: 1,
        title: '掲示板1',
        description: 'ここに掲示板の返答内容を記載する',
        createdAt: '2015-11-11 10:00',
        author: 'Admin',
        comments: [
          {
            body: 'コメント',
            author: 'user1',
            createdAt: '2015-11-11 10:00'
          }
        ]
      },
      {
        boradId: 2,
        title: '掲示板2',
        description: 'ここに掲示板の返答内容を記載する',
        createdAt: '2015-11-11 10:00',
        author: 'Admin',
        comments: [
          {
            body: 'コメント',
            author: 'user1',
            createdAt: '2015-11-11 10:00'
          }
        ]
      },
      {
        boradId: 3,
        title: '掲示板3',
        description: 'ここに掲示板の返答内容を記載する',
        createdAt: '2015-11-11 10:00',
        author: 'Admin',
        comments: [
          {
            body: 'コメント',
            author: 'user3',
            createdAt: '2015-11-11 10:00'
          },
          {
            body: 'コメント',
            author: 'user4',
            createdAt: '2015-11-11 10:00'
          }
        ]
      },
    ];

  };

  activate(params) {
    console.log('activate');
    console.log(params);
    var boardId = (params.id - 1);

    this.boardDetail = this.config[boardId];
  };

  // renderのタイミングっていつなのだろう？

  /*
  users = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
  */
}

