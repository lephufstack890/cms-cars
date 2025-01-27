import clsx from 'clsx';
import React, { FC, useState } from 'react';

import {
  defaultMessages,
  defaultUserInfos,
  messageFromClient,
  MessageModel,
  toAbsoluteUrl,
  UserInfoModel,
} from '@/_metronic/helpers';

type Props = {
  isDrawer?: boolean;
};

const bufferMessages = defaultMessages;

const ChatInner: FC<Props> = ({ isDrawer = false }) => {
  const [chatUpdateFlag, toggleChatUpdateFlat] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<MessageModel[]>(bufferMessages);
  const [userInfos] = useState<UserInfoModel[]>(defaultUserInfos);

  const sendMessage = () => {
    const newMessage: MessageModel = {
      text: message,
      time: 'Just now',
      type: 'out',
      user: 2,
    };

    bufferMessages.push(newMessage);
    setMessages(bufferMessages);
    toggleChatUpdateFlat(!chatUpdateFlag);
    setMessage('');
    setTimeout(() => {
      bufferMessages.push(messageFromClient);
      setMessages(() => bufferMessages);
      toggleChatUpdateFlat((flag) => !flag);
    }, 1000);
  };

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="card-body"
      id={isDrawer ? 'kt_drawer_chat_messenger_body' : 'kt_chat_messenger_body'}
    >
      <div
        className={clsx('scroll-y me-n5 pe-5', { 'h-300px h-lg-auto': !isDrawer })}
        data-kt-element="messages"
        data-kt-scroll="true"
        data-kt-scroll-activate="{default: false, lg: true}"
        data-kt-scroll-dependencies={
          isDrawer
            ? '#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer'
            : '#kt_header, #kt_toolbar, #kt_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer'
        }
        data-kt-scroll-max-height="auto"
        data-kt-scroll-offset={isDrawer ? '0px' : '-2px'}
        data-kt-scroll-wrappers={
          isDrawer ? '#kt_drawer_chat_messenger_body' : '#kt_content, #kt_chat_messenger_body'
        }
      >
        {messages.map((message, index) => {
          const userInfo = userInfos[message.user];
          const state = message.type === 'in' ? 'info' : 'primary';
          const templateAttr = {};
          if (message.template) {
            Object.defineProperty(templateAttr, 'data-kt-element', {
              value: `template-${message.type}`,
            });
          }
          const contentClass = `${isDrawer ? '' : 'd-flex'} justify-content-${
            message.type === 'in' ? 'start' : 'end'
          } mb-10`;
          return (
            <div
              key={`message${index}`}
              className={clsx('d-flex', contentClass, 'mb-10', { 'd-none': message.template })}
              {...templateAttr}
            >
              <div
                className={clsx(
                  'd-flex flex-column align-items',
                  `align-items-${message.type === 'in' ? 'start' : 'end'}`
                )}
              >
                <div className="d-flex align-items-center mb-2">
                  {message.type === 'in' ? (
                    <>
                      <div className="symbol  symbol-35px symbol-circle ">
                        <img alt="Pic" src={toAbsoluteUrl(`/media/${userInfo.avatar}`)} />
                      </div>
                      <div className="ms-3">
                        <a
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1"
                          href="#"
                        >
                          {userInfo.name}
                        </a>
                        <span className="text-muted fs-7 mb-1">{message.time}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">{message.time}</span>
                        <a
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1"
                          href="#"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol  symbol-35px symbol-circle ">
                        <img alt="Pic" src={toAbsoluteUrl(`/media/${userInfo.avatar}`)} />
                      </div>
                    </>
                  )}
                </div>

                <div
                  dangerouslySetInnerHTML={{ __html: message.text }}
                  className={clsx(
                    'p-5 rounded',
                    `bg-light-${state}`,
                    'text-dark fw-bold mw-lg-400px',
                    `text-${message.type === 'in' ? 'start' : 'end'}`
                  )}
                  data-kt-element="message-text"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="card-footer pt-4"
        id={isDrawer ? 'kt_drawer_chat_messenger_footer' : 'kt_chat_messenger_footer'}
      >
        <textarea
          className="form-control form-control-flush mb-3"
          data-kt-element="input"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={onEnterPress}
          placeholder="Type a message"
          rows={1}
          value={message}
        />

        <div className="d-flex flex-stack">
          <div className="d-flex align-items-center me-2">
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              data-bs-toggle="tooltip"
              title="Coming soon"
              type="button"
            >
              <i className="bi bi-paperclip fs-3" />
            </button>
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              data-bs-toggle="tooltip"
              title="Coming soon"
              type="button"
            >
              <i className="bi bi-upload fs-3" />
            </button>
          </div>
          <button
            className="btn btn-primary"
            data-kt-element="send"
            onClick={sendMessage}
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export { ChatInner };
