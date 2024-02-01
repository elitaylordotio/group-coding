import unittest
from reverseStrings import reverseString


class Testing(unittest.TestCase):
    def test_stressed(self):
        correct = 'desserts'
        result = reverseString('stressed')
        self.assertEqual(correct, result)

    def test_strops(self):
        correct = 'sports'
        result = reverseString('strops')
        self.assertEqual(correct, result)

    def test_racecar(self):
        correct = 'racecar'
        result = reverseString('racecar')
        self.assertEqual(correct, result)

    def test_hello(self):
        correct = 'olleh'
        result = reverseString('hello')
        self.assertEqual(correct, result)

    def test_able_was_i(self):
        correct = 'Able was I ere I saw Elba'
        result = reverseString('ablE was I ere I saw elbA')
        self.assertEqual(correct, result)

    def test_empty(self):
        correct = ''
        result = reverseString('')
        self.assertEqual(correct, result)

if __name__=='__main__':
	unittest.main()