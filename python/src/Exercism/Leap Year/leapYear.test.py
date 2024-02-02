import unittest
from leapYear import leapYear


class Testing(unittest.TestCase):
    def test_1997(self):
        self.assertEqual(False, leapYear(1997))

    def test_1900(self):
        self.assertEqual(False, leapYear(1900))

    def test_2000(self):
        self.assertEqual(True, leapYear(2000))

    def test_2004(self):
        self.assertEqual(True, leapYear(2004))

    def test_2008(self):
        self.assertEqual(True, leapYear(2008))

    def test_2012(self):
        self.assertEqual(True, leapYear(2012))

    def test_4(self):
        self.assertEqual(True, leapYear(4))

if __name__=='__main__':
	unittest.main()