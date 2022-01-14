### Hi there 👋

<!--
**gallo332/gallo332** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

Travail  (premier commit)
On souhaite créer une application qui gere des étudiants. 
Chaque étudiant est défini par:
un code numérique auto-incrementé par l'application 
Un nom
Une addresse mail 
Une photo

Cette application doit permettre de :
saisir un nouveau étudiant 
Ajouter l'étudiant saisi dans la base de données 
Afficher tous les étudiants 
Supprimer un étudiant
Editer et modifier les données d'un étudiant 
Chercher les étudiants dont les nom commenecent par des mot clés


Travail (second and third commits)


Objectif du projet

L’objectif de ce projet est de mettre en œuvre les compétences acquises dans le cours d’architecture
logicielle. Il est découpé en trois parties que vous devrez faire intégralement.


Site Web

Il s’agira de concevoir un site d’actualité disposant des fonctionnalités suivantes :
- La page d’accueil devra afficher la liste des derniers articles avec une description sommaire de
chacun d’entre eux. Des boutons « suivant » et « précédent » devront permettre de parcourir
les articles selon leur ancienneté.
- Le clic sur le titre d’un article devra permettre de le consulter en détail.
- On devrait avoir la possibilité de consulter les articles par catégorie.
- Trois types de profils utilisateurs devront être pris en compte :
 Les visiteurs simples : Ils peuvent accéder à toutes les fonctionnalités applicatives liées
à la consultation des articles (affichage par catégorie, etc.)
 Les éditeurs : Leur rôle est de maintenir le contenu du site. De ce fait, en plus de ce
que peuvent faire les visiteurs, Ils ont la possibilité, après authentification, de gérer
(lister, ajouter, supprimer ou modifier) les articles et les catégories.
 Les administrateurs sont des éditeurs qui ont la possibilité de gérer les données des
utilisateurs. Ainsi, ils ont accès à toutes les fonctionnalités applicatives et peuvent
donc ajouter, lister, modifier ou supprimer des utilisateurs. De même, ils sont chargés
de l’ajout et de la suppression des jetons d’authentification permettant d’accéder aux
services web à accès restreint.


Services Web


En plus des fonctionnalités directement accessibles depuis un navigateur, l’application devra exposer
un ensemble de services web afin que ses fonctionnalités métiers soient accessibles à d’autres
applications. De ce fait, il vous est demandé de :

- Créer un service web SOAP permettant de :

 lister, ajouter, supprimer ou modifier des utilisateurs. L’accès à ce service requiert un
jeton d’authentification qu’un administrateur devra au préalable générer depuis la
page d’administration du site
 D’authentifier un utilisateur suivant un login et un mot de passe fourni

- Créer un service web REST permettant de :

 Récupérer la liste de tous les articles. Cette liste devra être retournée au format XML
ou JSON selon le choix de l’utilisateur.
 récupérer la liste des articles regroupés en catégories (format XML ou JSON au choix)
 récupérer la liste des articles appartenant à une catégorie fournie par l’utilisateur
(format XML ou JSON au choix)

Application Client

Créer une application Java (ou Python) permettant de gérer les utilisateurs. Quand l’application est
lancée, elle demande à l’utilisateur son login et son mot de passe et invoque ainsi le service web
d’authentification pour voir si l’utilisateur a les droits d’administration lui permettant d’agir sur les
utilisateurs. Le cas échéant, l’application devra fournir un accès complet aux fonctionnalités de gestion
des utilisateurs et ce, en utilisant les services web adéquats.












































