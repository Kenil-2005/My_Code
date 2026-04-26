interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    assignedTo: string;
}
type PartialTodo = Partial<Todo>;
declare let updateTodo1: PartialTodo;
type RequiredTodo = Required<Todo>;
type ReadonlyTodo = Readonly<Todo>;
type PickTodo = Pick<Todo, "title" | "description">;
type OmitTodo = Omit<Todo, "createdAt">;
type PageInfo = {
    title: string;
    url: string;
};
type Pages = "home" | "about" | "contact";
type Merged = Record<Pages, PageInfo>;
declare let pages: Merged;
declare function createUser(): {
    id: number;
    name: string;
    email: string;
};
type UserType = ReturnType<typeof createUser>;
//# sourceMappingURL=11-utility-types.d.ts.map