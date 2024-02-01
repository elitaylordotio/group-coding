import unittest
from rainDrop import raindrop


class Testing(unittest.TestCase):
    def test_three(self):
        correct = "Pling"
        result = raindrop(3)
        message = "Should return 'Pling' for 3"
        self.assertEqual(correct, result, message)

    def test_five(self):
        correct = "Plang"
        result = raindrop(5)
        message = "Should return 'Plang' for 5"
        self.assertEqual(correct, result, message)

    def test_seven(self):
        correct = "Plong"
        result = raindrop(7)
        message = "Should return 'Plong' for 7"
        self.assertEqual(correct, result, message)

    def test_zero(self):
        correct = "0"
        result = raindrop(0)
        message = "Should return '0' for 0"
        self.assertEqual(correct, result, message)

    def test_twenty_eight(self):
        correct = "Plong"
        result = raindrop(28)
        message = "Should return 'Plong' for 28"
        self.assertEqual(correct, result, message)

    def test_thirty(self):
        correct = "PlingPlang"
        result = raindrop(30)
        message = "Should return 'PlingPlang' for 30"
        self.assertEqual(correct, result, message) 

    def test_thirty_four(self):
        correct = "34"
        result = raindrop(34)
        message = "Should return '34' for 34"
        self.assertEqual(correct, result, message) 

    def test_one_hundred_and_five(self):
        correct = "PlingPlangPlong"
        result = raindrop(105)
        message = "Should return 'PlingPlangPlong' for 105"
        self.assertEqual(correct, result, message) 

    def test_one(self):
        correct = "1"
        result = raindrop(1)
        message = "Should return '1' for 1"
        self.assertEqual(correct, result, message) 

    def test_negative_one(self):
        correct = "-1"
        result = raindrop(-1)
        message = "Should return '-1' for -1"
        self.assertEqual(correct, result, message) 

if __name__=='__main__':
	unittest.main()