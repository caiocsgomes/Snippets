SELECT SalesID, COUNT(*)
FROM AXDelNotesNoTracking
GROUP BY SalesID
HAVING COUNT(*) > 1