import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React, { Component } from "react";
import Fade from "react-reveal";



class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
      chatbotKey: 1
    };
    
  }

  setSteps() {
    const steps=[
      {
        id: 'welcome_zh',
        message: '哈喽，我是虚拟檀寅，你选择什么语言？',
        trigger: 'welcome_en',
      },
      {
        id: 'welcome_en',
        message: 'Hello, I am virtual Yin, which language do you prefer?',
        trigger: 'welcome_fr',
      },
      {
        id: 'welcome_fr',
        message: 'Bonjour, je suis Yin virtuel, quelle langue préférez-vous?',
        trigger: 'language',
      },
      {
        id: 'language',
        options: [
          { value: 1, label: '简体中文', trigger: 'askname-zh' },
          { value: 2, label: 'English', trigger: 'askname-en' },
          { value: 3, label: 'français', trigger: 'askname-fr' },
        ]
      },
      {
        id: 'askname-zh',
        message: '请问你叫什么？',
        trigger: "answername-zh",
      },
      {
        id: 'answername-zh',
        user: true,
        trigger: "nicetomeetyou-zh",
      },
      {
        id: 'nicetomeetyou-zh',
        message: '你好{previousValue}，很高兴认识你！',
        trigger: "welcome_zh",
      },
      {
        id: 'askname-en',
        message: 'What\'s your name?',
        trigger: "answername-en",
      },
      {
        id: 'answername-en',
        user: true,
        trigger: "nicetomeetyou-en",
      },
      {
        id: 'nicetomeetyou-en',
        message: 'Hello {previousValue}, nice to meet you!',
        trigger: "welcome_zh",
        
      },
      {
        id: 'askname-fr',
        message: 'Comment vous appelez-vous?',
        trigger: "answername-fr",
      },
      {
        id: 'answername-fr',
        user: true,
        trigger: "nicetomeetyou-fr",
      },
      {
        id: 'nicetomeetyou-fr',
        message: 'Bonjour {previousValue}, enchantez!',
        trigger: "welcome_zh",
        
      }
    ];
    this.setState({ steps: steps })
  }

  refreshChat() {
    this.setState({ chatbotKey: 1 - this.state.chatbotKey });
  }

  componentWillMount() {
    this.setSteps();
  }

  render() {
    const otherFontTheme = {
      background: '#eeeeee',
      fontFamily: 'Helvetica Neue',
      headerBgColor: '#ffffff',
      headerFontColor: '#fff',
      headerFontSize: '20px',
      botBubbleColor: '#1450A3',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a'
    };
    return (
      <div style={{ position: "fixed", right: 0, bottom: 0}}>
        <Fade bottom>
          <button
            style={{
              position: 'absolute',
              right: 20,
              top: 10,
              zIndex: 3,
              padding: 0,
              backgroundColor: 'transparent'
            }}
            onClick={this.refreshChat.bind(this)}
          >
            <i 
              style={{color:'black'}}
              className="fa fa-refresh"
              aria-hidden="true"
            >
            </i>
          </button>
          </Fade>
        <Fade right>
          <ThemeProvider theme={otherFontTheme}>
            <ChatBot
              key={this.state.chatbotKey}
              botDelay={2000}
              headerTitle="Virtual Yin"
              botAvatar="https://github.com/Yin-FR/Yin-FR/blob/main/assets/avatar_bot.jpg?raw=true" 
              steps={this.state.steps}
              hideUserAvatar={true}
              id="chatbox"
            />
            
          </ThemeProvider >
        </Fade>
      </div>
    )
  }
  
}

export default ChatBox;