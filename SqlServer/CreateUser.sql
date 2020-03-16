USE [master] CREATE LOGIN [type_name] WITH PASSWORD=N'type_password', DEFAULT_DATABASE=[master]
USE [type_database] CREATE USER [type_name] FOR LOGIN [type_name] WITH DEFAULT_SCHEMA=[dbo]