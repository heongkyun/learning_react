import React, { Component } from 'react';
import AppTemplate from './components/AppTemplate';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Button from './components/Button';
import WriteBox from './components/WriteBox';
import PostCardList from './components/PostCardList/PostCardList';

class App extends Component {
  state = {
    tab: 'home', // 'home' | 'notification' | 'message'
    writeBox: false,
    posts: [
      {
        id: 2,
        text:
          '무엇을 생각하면 좋을까? 나도 잘 모르겠다. \n엔터를 했을 때도 새 줄이 먹히도록 설정했다.\n딱히 제한은 두지 않았다.',
        date: '2018-07-18 02:03:15',
      },
      {
        id: 1,
        text: '최근에 작성한게 위로 올라오니까 이건 옛날에 작성됐고 두번째다.',
        date: '2018-07-18 01:03:15',
      },
      {
        id: 0,
        text: '엄청 오래된건 그냥 날짜가 나타났으면 좋겠다.',
        date: '2018-07-01 01:03:15',
      },
    ],
  };

  get id() {
    return this.state.posts[0] !== undefined ?  this.state.posts[0].id !== undefined ? this.state.posts[0].id + 1 : 0 : 0;
  }

  handleSelectTab = tab => {
    this.setState({ tab });
  };

  handleToggleWriteBox = () => {
    this.setState({
      writeBox: !this.state.writeBox,
    });
  };

  handleWrite = text => {
    this.setState({
      posts: [
        {
          id: this.id,
          text,
          date: new Date(),
        },
        ...this.state.posts,
      ],
      writeBox: false, // 모달 닫기
    });
  };

  handleRemove = id => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== id)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.posts !== prevState.posts) {
      localStorage.setItem('posts', JSON.stringify(this.state.posts));
    }
  }

  componentDidMount() {
    const posts = localStorage.getItem('posts');
    if (posts) {
      this.setState({
        posts: JSON.parse(posts),
      });
    }
  }
  

  render() {
    const { tab, writeBox, posts } = this.state; // 비구조화 할당
    
    return (
      <AppTemplate 
        header={<Header 
          left={<HeaderNav tab={tab}  onSelect={this.handleSelectTab} />}
          right={<Button onClick={this.handleToggleWriteBox}>새 글 작성</Button>} 
        />}
      >
        {writeBox && (
          <WriteBox
            onClose={this.handleToggleWriteBox}
            onWrite={this.handleWrite}
          />
        )}
        <PostCardList posts={posts} onRemove={this.handleRemove} />
      </AppTemplate>
    );
  }
}

export default App;