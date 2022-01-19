describe('LinkedList', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('insert', () => {
    it('should contain the element with key 5 when the element is inserted', () => {
      const element = {
        key: 5,
      };
      linkedList.insert(element);
      const foundElement = linkedList.contains(element.key);
      expect(foundElement.key).toEqual(element.key);
    });

    it('should contain the elements with keys 5, 10, 14 when the elements is inserted', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      const foundElement1 = linkedList.contains(element1.key);
      expect(foundElement1.key).toEqual(element1.key);
      const foundElement2 = linkedList.contains(element2.key);
      expect(foundElement2.key).toEqual(element2.key);
      const foundElement3 = linkedList.contains(element3.key);
      expect(foundElement3.key).toEqual(element3.key);
    });

    it('should increment the size when elements are inserted', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      expect(linkedList.size).toEqual(0);
      linkedList.insert(element1);
      expect(linkedList.size).toEqual(1);
      linkedList.insert(element2);
      expect(linkedList.size).toEqual(2);
    });
  });

  describe('remove', () => {
    it('should remove the element with key 5 when the elements 5, 10, 14 are inserted and 5 is removed', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      linkedList.remove(element1.key);
      expect(linkedList.contains(element1.key)).toEqual(null);
    });
    it('should remove the element with key 10 when the elements 5, 10, 14 are inserted and 10 is removed', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      linkedList.remove(element2.key);
      expect(linkedList.contains(element2.key)).toEqual(null);
    });
    it('should remove the element with key 14 when the elements 5, 10, 14 are inserted and 14 is removed', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      linkedList.remove(element3.key);
      expect(linkedList.contains(element3.key)).toEqual(null);
    });
    it('should decrement the size when elements are removed', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      expect(linkedList.size).toEqual(0);
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      expect(linkedList.size).toEqual(3);
      linkedList.remove(element1.key);
      expect(linkedList.size).toEqual(2);
      linkedList.remove(element2.key);
      expect(linkedList.size).toEqual(1);
      linkedList.remove(element3.key);
      expect(linkedList.size).toEqual(0);
    });
  });

  describe('contains', () => {
    it('should return the element with key 5 when the elements 5, 10, 14 are inserted', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      const foundElement1 = linkedList.contains(element1.key);
      expect(foundElement1.key).toEqual(element1.key);
    });
    it('should return the element with key 10 when the elements 5, 10, 14 are inserted', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      const foundElement2 = linkedList.contains(element2.key);
      expect(foundElement2.key).toEqual(element2.key);
    });
    it('should return the element with key 14 when the elements 5, 10, 14 are inserted', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      const foundElement3 = linkedList.contains(element3.key);
      expect(foundElement3.key).toEqual(element3.key);
    });
    it('should return null when the element with key 20 is searched for and only elements 5, 10, 14 are inserted', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      const foundElement1 = linkedList.contains(20);
      expect(foundElement1).toEqual(null);
    });
  });

  describe('size', () => {
    it('should return 0 when no elements have been inserted', () => {
      expect(linkedList.size).toEqual(0);
    });

    it('should return 1 when 1 element has been inserted', () => {
      const element1 = {
        key: 5,
      };
      linkedList.insert(element1);
      expect(linkedList.size).toEqual(1);
    });

    it('should return 3 when 3 elements have been inserted', () => {
      expect(linkedList.size).toEqual(0);
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      expect(linkedList.size).toEqual(3);
    });

    it('should return 2 when 3 elements are inserted and one is removed', () => {
      expect(linkedList.size).toEqual(0);
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      expect(linkedList.size).toEqual(3);
      linkedList.remove(element1.key);
      expect(linkedList.size).toEqual(2);
    });

    it('should return 0 when 3 elements have been inserted and 3 are removed', () => {
      const element1 = {
        key: 5,
      };
      const element2 = {
        key: 10,
      };
      const element3 = {
        key: 14,
      };
      expect(linkedList.size).toEqual(0);
      linkedList.insert(element1);
      linkedList.insert(element2);
      linkedList.insert(element3);
      expect(linkedList.size).toEqual(3);
      linkedList.remove(element1.key);
      expect(linkedList.size).toEqual(2);
      linkedList.remove(element2.key);
      expect(linkedList.size).toEqual(1);
      linkedList.remove(element3.key);
      expect(linkedList.size).toEqual(0);
    });
  });
});
