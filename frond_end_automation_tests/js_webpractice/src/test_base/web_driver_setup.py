import unittest
from selenium import webdriver


class WebDriverSetup(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.implicitly_wait(10)
        self.driver.maximize_window()

    def tearDown(self):
        if self.driver != None:
            print("Cleanup of test environment")
            self.driver.close()
            self.driver.quit()
