# AI-Enhanced Intelligence Dashboard

## Getting Started

The objective is to develop an AI-Enhanced Intelligence Dashboard where users can manage reports and leverage AI-powered assistance for content generation and summartizaiton.

### Requirements

1. [Node.js](https://nodejs.org/en) (version found in `.nvmrc`)
2. [pnpm](https://pnpm.io/) (v10.6.5)

### Running the development environment

1. First install the required dependencies by running

```sh
$ pnpm install
```

2. Run the local development environment

```sh
$ pnpm dev
```

## Technical Requirements

- React.js + TypeScript
- [MaterialUI](https://mui.com/material-ui/) or [RSuite](https://rsuitejs.com/)
- [React Context](https://react.dev/learn/scaling-up-with-reducer-and-context) or [Zustand](https://zustand-demo.pmnd.rs/)
- [dnd-kit](https://dndkit.com/)
- [TinyMCE](https://www.tiny.cloud/) or similar rich-text editor ([Draft.js](https://draftjs.org/) etc.)
- OpenAI API (or mocked)
- Git

## Functional Requirements (required)

1. Report Management
   1. Display a list of reports (cards or table);
   2. Search & filter reports by title;
   3. Create new reports (title + rich-text content);
   4. Edit existing reports;
2. AI Assistant Integration
   1. **Generate Draft** button: AI generates a draft report based on a user provided prompt;
   2. **Summarize Content** button: AI summarizes existing report content;
3. Drag & Drop
   1. Reorder reports manually using [dnd-kit](https://dndkit.com/);
4. User interface
   1. Responsive and accessible UI;
   2. Built using [MaterialUI](https://mui.com/material-ui/) or [RSuite](https://rsuitejs.com/);
5. State management
   1. Use [React Context](https://react.dev/learn/scaling-up-with-reducer-and-context) or [Zustand](https://zustand-demo.pmnd.rs/)

## Functional Requirements (optional)

1. User roles
   1. Admin - create/edit/delete;
   2. Viewer - view;
2. Activity tracking (e.g., created, edited, AI usage);
3. LocalStorage persistance
