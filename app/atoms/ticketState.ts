import { atom } from "recoil";

export type LabelType = 1 | 2 | 3 | 4;

interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  label: LabelType;
  number: number;
  assignee?: User;
}

interface TicketState {
  [key: string]: Ticket[];
}

export const ticketState = atom<TicketState>({
  key: "ticket",
  default: {
    "TO DO": [
      {
        id: `ticket-${crypto.randomUUID()}`,
        title: "Engage Jupiter Express for outer solar system travel",
        description: "",
        label: 1,
        number: 25,
        assignee: {
          id: `user-${crypto.randomUUID()}`,
          name: "John",
          avatar: "3",
        },
      },
      {
        id: `ticket-${crypto.randomUUID()}`,
        title: "Create 90 day plans for all departments in the Mars Office",
        description: "",
        label: 2,
        number: 12,
      },
      {
        id: `ticket-${crypto.randomUUID()}`,
        title: "Engage Saturn's Rings Resort as a preferred provider",
        description: "",
        label: 1,
        number: 17,
        assignee: {
          id: `user-${crypto.randomUUID()}`,
          name: "Amy",
          avatar: "7",
        },
      },
    ],
    "IN PROGRESS": [
      {
        id: `ticket-${crypto.randomUUID()}`,
        title: "Requesting available flights is now taking > 5 seconds",
        description: "",
        label: 3,
        number: 8,
        assignee: {
          id: `user-${crypto.randomUUID()}`,
          name: "Mark",
          avatar: "6",
        },
      },
      {
        id: `ticket-${crypto.randomUUID()}`,
        title: "Engage Saturn Shuttle Lines for group tours",
        description: "",
        label: 1,
        number: 15,
        assignee: {
          id: `user-${crypto.randomUUID()}`,
          name: "Timothy",
          avatar: "10",
        },
      },
    ],
    "CODE REVIEW": [
      {
        id: `ticket-${crypto.randomUUID()}`,
        title: "Register with the Mars Ministry of Revenue",
        description: "",
        label: 1,
        number: 11,
      },
    ],
    DONE: [
      {
        id: `ticket-${crypto.randomUUID()}`,
        title: "Homepage footer uses an inline style - should use a class",
        description: "",
        label: 4,
        number: 68,
        assignee: {
          id: `user-${crypto.randomUUID()}`,
          name: "Joyce",
          avatar: "8",
        },
      },
    ],
  },
});
