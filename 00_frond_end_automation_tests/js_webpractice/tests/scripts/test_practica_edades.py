from js_webpractice.src.test_base.web_driver_setup import WebDriverSetup
from js_webpractice.src.page_object.pages.practica_edades import PracticaEdades
from js_webpractice.src.page_object.practica_edades_locators import Locators
from selenium.webdriver.common.by import By
import unittest
import random


class TestPracticaEdades(WebDriverSetup):
    def test_paso1_title(self):
        self.driver.get(Locators.app_url)
        self.driver.set_page_load_timeout(30)

        self.assertEqual(
            self.driver.find_element(By.XPATH, Locators.h2_paso1).text,
            "Paso 1:",
            "Error, título del paso 1 no coincide"
        )

    def test_paso1_elements_visibility(self):
        self.driver.get(Locators.app_url)
        self.driver.set_page_load_timeout(30)

        self.assertTrue(
            self.driver.find_element(By.ID, Locators.input_cantidad_integrantes).is_displayed(),
            "Error: input de cantidad de integrantes no es visible"
        )

        self.assertTrue(
            self.driver.find_element(By.ID, Locators.boton_siguiente_paso).is_displayed(),
            "Error: botón siguiente paso no es visible"
        )

    def test_paso1_elements_not_visible(self):
        self.driver.get(Locators.app_url)
        self.driver.set_page_load_timeout(30)

        self.assertFalse(
            self.driver.find_element(By.ID, "integrantes").is_displayed(),
            "Error: Paso 2 está visible cuando no debería"
        )

        self.assertFalse(
            self.driver.find_element(By.ID, Locators.boton_calcular_edades).is_displayed(),
            "Error: botón calcular edades visible cuando no debería"
        )

        self.assertFalse(
            self.driver.find_element(By.ID, Locators.texto_error).is_displayed(),
            "Error: el texto de error está visible cuando no debería"
        )

        self.assertFalse(
            self.driver.find_element(By.ID, Locators.boton_reset).is_displayed(),
            "Error: el botón de reset está visible cuando no debería"
        )

    def test_ingresar_cantidad_de_usuarios(self):
        driver = self.driver
        self.driver.get(Locators.app_url)
        self.driver.set_page_load_timeout(30)

        practica_edades = PracticaEdades(driver)

        cantidad_integrantes = random.randint(2, 9)
        practica_edades.agregar_cantidad_integrtantes(cantidad_integrantes)

        self.assertTrue(
            self.driver.find_element(By.XPATH, Locators.h2_paso2).is_displayed(),
            "Error: h2 de paso 2 no es visible"
        )
        self.assertEqual(
            self.driver.find_element(By.XPATH, Locators.h2_paso2).text,
            "Paso 2: Ingrese edades",
            "Error: título del paso 2 no coincide"
        )

    def test_ingresar_edades(self):
        driver = self.driver
        self.driver.get(Locators.app_url)
        self.driver.set_page_load_timeout(30)

        practica_edades = PracticaEdades(driver)

        cantidad_integrantes = random.randint(2, 9)
        practica_edades.agregar_cantidad_integrtantes(cantidad_integrantes)
        practica_edades.ingresar_edades()

        self.assertTrue(
            self.driver.find_element(By.ID, Locators.paso_analisis).is_displayed(),
            "Error: paso de análisis no es visible"
        )

        self.assertEqual(
            self.driver.find_element(By.XPATH, Locators.h2_paso3).text,
            "Paso 3: Analisis de edades",
            "Error: título del paso análisis no coincide"
        )
    def test_pantalla_error_cantidad_integrantes(self):
        driver = self.driver
        self.driver.get(Locators.app_url)
        self.driver.set_page_load_timeout(30)

        practica_edades = PracticaEdades(driver)
        practica_edades.agregar_cantidad_integrtantes(0)

        self.assertTrue(
            self.driver.find_element(By.XPATH, Locators.h2_pantalla_error).is_displayed(),
            "Error: el título de pantalla de error no está visible"
        )

        self.assertEqual(
            self.driver.find_element(By.XPATH, Locators.h2_pantalla_error).text,
            "Algo salió mal",
            "Error: el título de pantalla de error no conincide"
        )

        self.assertTrue(
            self.driver.find_element(By.XPATH, Locators.texto_pantalla_error).is_displayed(),
            "Error: el texto de  error no está visible"
        )

        self.assertEqual(
            self.driver.find_element(By.XPATH, Locators.texto_pantalla_error).text,
            "No se ingresó un dato válido",
            "Error: el texto de error no conincide"
        )

        self.assertTrue(
            self.driver.find_element(By.ID, Locators.boton_reset).is_displayed(),
            "Error: el botón de reset no está visible"
        )
