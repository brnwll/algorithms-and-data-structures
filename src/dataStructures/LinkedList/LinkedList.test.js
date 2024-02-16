import "@testing-library/jest-dom";
import { LinkedList } from "./LinkedList";

describe("LinkedList", () => {
  describe("constructor", () => {
    it("should create a new linked list with the given values", () => {
      const list = new LinkedList(1, 2, 3);
      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
      expect(list.head.next.next.next).toBeNull();
    });

    it("should create an empty linked list if no values are given", () => {
      const list = new LinkedList();
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });
  describe("push", () => {
    it("should add a new node to the end of the list", () => {
      const list = new LinkedList(1, 2, 3);
      list.push(4);
      expect(list.head.next.next.next.value).toBe(4);
      expect(list.head.next.next.next.next).toBeNull();
    });

    it("should set the new node as the head and tail if the list is empty", () => {
      const list = new LinkedList();
      list.push(1);
      expect(list.head.value).toBe(1);
      expect(list.tail.value).toBe(1);
    });
  });
  describe("pop", () => {
    it("should remove the last node from the list", () => {
      const list = new LinkedList(1, 2, 3);
      list.pop();
      expect(list.head.next.next).toBeNull();
      expect(list.tail.value).toBe(2);
    });
  });
  describe("shift", () => {
    it("should add a new node to the beginning of the list", () => {
      const list = new LinkedList(1, 2, 3);
      list.shift(0);
      expect(list.head.value).toBe(0);
      expect(list.head.next.value).toBe(1);
    });
  });
  describe("unshift", () => {
    it("should remove the first node from the list", () => {
      const list = new LinkedList(1, 2, 3);
      list.unshift();
      expect(list.head.value).toBe(2);
    });
  });
  describe("insertAt", () => {
    it("should insert a new node at the given index", () => {
      const list = new LinkedList(1, 2, 3);
      list.insertAt(4, 1);
      expect(list.head.next.value).toBe(4);
      expect(list.head.next.next.value).toBe(2);
    });
  });
  describe("deleteAt", () => {
    it("should delete the node at the given index", () => {
      const list = new LinkedList(1, 2, 3);
      list.deleteAt(1);
      expect(list.head.next.value).toBe(3);
    });
  });
  describe("delete", () => {
    it("should delete the first node with the given value", () => {
      const list = new LinkedList(1, 2, 3);
      list.delete(2);
      expect(list.head.next.value).toBe(3);
    });
  });
  describe("find", () => {
    it("should return the first node with the given value", () => {
      const list = new LinkedList(1, 2, 3);
      expect(list.find(2).value).toBe(2);
    });
  });
  describe("toString", () => {
    it("should return a string representation of the list", () => {
      const list = new LinkedList(1, 2, 3);
      expect(list.toString()).toContain("1 → 2 → 3 → null");
    });
  });
  describe("toArray", () => {
    it("should return an array representation of the list", () => {
      const list = new LinkedList(1, 2, 3);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });
  });
});
