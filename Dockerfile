FROM openjdk:8-alpine

COPY target/uberjar/elevator.jar /elevator/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/elevator/app.jar"]
