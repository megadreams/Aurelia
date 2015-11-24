import {Base} from 'base';

export class Board extends Base{

//  heading = '掲示板';

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

  /**
   * ViewModelが生成されるときに呼ばれるメソッド
   *  引数に多言語対応用のi18nが呼ばれる
   */
  constructor(i18n) {

    super(i18n);


    // TODO: ここはhttpでデータを取得したい
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

    // TODO: APIを元に取得するデータ
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

  /**
   * URLパラメータを受け取る方法
   *  - constructor が呼ばれてからactivateが呼ばれる
   *  - TODO: renderのタイミングはconstructorでも走るのか？
   *     - どのタイミングでrenderが走るのかは調べる必要がある
   */
  activate(params) {
    var boardId = (params.id - 1);
    // とりあえず表示を切り替えるために設定してみる
    this.boardDetail = this.config[boardId];

  };

  /**
  * createBoard Buttonが押された時に呼ばれるメソッド
  *
  * ViewModel と View のイベントのひも付けは[click.delegate]を利用している
  */
  createBoard() {
    alert(this.i18n.tr('boardAddNewButton'));
  };

  /**
   * 言語切替メソッド
   */
  setLocale(local) {
    super.setLocale(local);
  };

  // TODO: renderのタイミングっていつなのだろう？
  // TODO: http通信するにはどうしたら良いのだろう？


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

