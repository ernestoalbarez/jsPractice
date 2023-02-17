from unittest import TestLoader, TestSuite, TextTestRunner
from webtable.tests.scripts.test_webtable import TestWebTableApp

import testtools as testtools

if __name__ == "__main__":
    test_loader = TestLoader()
    # Test Suite is used since there are multiple test cases
    test_suite = TestSuite(
        test_loader.loadTestsFromTestCase(TestWebTableApp),
        # import tests from other scripts
    )

    test_runner = TextTestRunner(verbosity=2)
    test_runner.run(test_suite)

    # Refer https://testtools.readthedocs.io/en/latest/api.html for more information
    parallel_suite = testtools.ConcurrentStreamTestSuite(lambda: ((case, None) for case in test_suite))
    parallel_suite.run(testtools.StreamResult())
