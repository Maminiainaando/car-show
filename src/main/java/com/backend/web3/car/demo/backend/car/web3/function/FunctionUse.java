package com.backend.web3.car.demo.backend.car.web3.function;

import com.backend.web3.car.demo.backend.car.web3.model.Appointment;
import com.backend.web3.car.demo.backend.car.web3.model.Car;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class FunctionUse {
    public int readIdCarForImage(Connection conn) {
        Statement statement;
        ResultSet rs = null;
        int id = 0;
        try {
            String query = String.format(" select id_car from car order by id_car desc limit 1; ");
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
            while (rs.next()) {
                id = rs.getInt("id_car");
            }

        } catch (Exception e) {
            System.out.println(e);
            e.getMessage();
        }
        return id;
    }

    public List<Car> getCarByType(Connection conn, String typeCar) {
        List<Car> cars = new ArrayList<>();
        Statement statement;
        ResultSet rs = null;

        try {
            String query = """
                    SELECT 
                        c.id_car, 
                        c.car_name, 
                        c.model, 
                        c.price, 
                        c.color, 
                        c.motor_type, 
                        c.power, 
                        c.place_number, 
                        c.status, 
                        c.type_car, 
                        i.url 
                    FROM 
                        car c 
                    INNER JOIN 
                        image i 
                    ON 
                        i.id_car = c.id_car
                    WHERE 
                        c.type_car ILIKE '%s'
                    """.formatted("%" + typeCar + "%");

            statement = conn.createStatement();
            rs = statement.executeQuery(query);

            while (rs.next()) {
                cars.add(new Car(
                        rs.getInt("id_car"),
                        rs.getString("car_name"),
                        rs.getString("model"),
                        rs.getFloat("price"),
                        rs.getString("color"),
                        rs.getString("motor_type"),
                        rs.getString("power"),
                        rs.getInt("place_number"),
                        rs.getString("status"),
                        rs.getString("type_car"),
                        rs.getString("url")
                ));
            }
        } catch (Exception e) {
            throw new RuntimeException("fix it: ", e);
        }

        return cars;
    }


    public List<Car> getCarByMotorType(Connection conn, String typeMotor) {
        List<Car> cars = new ArrayList<>();
        Statement statement;
        ResultSet rs = null;

        try {
            String query = """
                    SELECT 
                        c.id_car, 
                        c.car_name, 
                        c.model, 
                        c.price, 
                        c.color, 
                        c.motor_type, 
                        c.power, 
                        c.place_number, 
                        c.status, 
                        c.type_car, 
                        i.url 
                    FROM 
                        car c 
                    INNER JOIN 
                        image i 
                    ON 
                        i.id_car = c.id_car
                        
                    WHERE 
                        c.motor_type ILIKE '%s' order by c.id_car desc
                    """.formatted("%" + typeMotor + "%");

            statement = conn.createStatement();
            rs = statement.executeQuery(query);

            while (rs.next()) {
                cars.add(new Car(
                        rs.getInt("id_car"),
                        rs.getString("car_name"),
                        rs.getString("model"),
                        rs.getFloat("price"),
                        rs.getString("color"),
                        rs.getString("motor_type"),
                        rs.getString("power"),
                        rs.getInt("place_number"),
                        rs.getString("status"),
                        rs.getString("type_car"),
                        rs.getString("url")
                ));
            }
        } catch (Exception e) {
            throw new RuntimeException("fix it: ", e);
        }

        return cars;
    }

    public List<Car> getCarById(Connection conn, int idCar) {
        List<Car> cars = new ArrayList<>();
        Statement statement;
        ResultSet rs = null;
        PreparedStatement preparedStatement = null;


        try {
            String query = """
                    SELECT 
                        c.id_car, 
                        c.car_name, 
                        c.model, 
                        c.price, 
                        c.color, 
                        c.motor_type, 
                        c.power, 
                        c.place_number, 
                        c.status, 
                        c.type_car, 
                        i.url 
                    FROM 
                        car c 
                    INNER JOIN 
                        image i 
                    ON 
                        i.id_car = c.id_car
                        
                   WHERE 
                    c.id_car = ?
                """;

            preparedStatement = conn.prepareStatement(query);
            preparedStatement.setInt(1, idCar);
            rs = preparedStatement.executeQuery();

            while (rs.next()) {
                cars.add(new Car(
                        rs.getInt("id_car"),
                        rs.getString("car_name"),
                        rs.getString("model"),
                        rs.getFloat("price"),
                        rs.getString("color"),
                        rs.getString("motor_type"),
                        rs.getString("power"),
                        rs.getInt("place_number"),
                        rs.getString("status"),
                        rs.getString("type_car"),
                        rs.getString("url")
                ));
            }
        } catch (Exception e) {
            throw new RuntimeException("fix it: ", e);
        }

        return cars;
    }



    public List<Car> getCarByMinPrice(Connection conn) {
        List<Car> cars = new ArrayList<>();
        Statement statement;
        ResultSet rs = null;

        try {
            String query = (" SELECT DISTINCT ON (c.car_name)\n" +
                    "    c.id_car,\n" +
                    "    c.car_name,\n" +
                    "    c.model,\n" +
                    "    c.price,\n" +
                    "    c.color,\n" +
                    "    c.motor_type,\n" +
                    "    c.power,\n" +
                    "    c.place_number,\n" +
                    "    c.status,\n" +
                    "    c.type_car,\n" +
                    "    i.url\n" +
                    "FROM \n" +
                    "    car c\n" +
                    "    inner join image i \n" +
                    "    on \n" +
                    "    i.id_car = c.id_car\n" +
                    "ORDER BY \n" +
                    "    c.car_name, \n" +
                    "    c.price; ");

            statement = conn.createStatement();
            rs = statement.executeQuery(query);

            while (rs.next()) {
                cars.add(new Car(
                        rs.getInt("id_car"),
                        rs.getString("car_name"),
                        rs.getString("model"),
                        rs.getFloat("price"),
                        rs.getString("color"),
                        rs.getString("motor_type"),
                        rs.getString("power"),
                        rs.getInt("place_number"),
                        rs.getString("status"),
                        rs.getString("type_car"),
                        rs.getString("url")
                ));
            }
        } catch (Exception e) {
            throw new RuntimeException("fix it: ", e);
        }

        return cars;
    }
    public List<Appointment> getAppointmentById(Connection conn, int idAppointment) {
        List<Appointment> appointments = new ArrayList<>();
        Statement statement;
        ResultSet rs = null;
        PreparedStatement preparedStatement = null;


        try {
            String query = """
                    SELECT 
                  * from appointement where id_car=?;
                """;

            preparedStatement = conn.prepareStatement(query);
            preparedStatement.setInt(1, idAppointment);
            rs = preparedStatement.executeQuery();

            while (rs.next()) {
                appointments.add(new Appointment(
                        rs.getString("name"),
                        rs.getString("first_name"),
                        rs.getString("email"),
                        rs.getString("contact"),
                        rs.getString("message"),
                        rs.getString("appointement_date"),
                        rs.getString("status"),
                        rs.getInt("id_car")

                ));
            }
        } catch (Exception e) {
            throw new RuntimeException("fix it: ", e);
        }

        return appointments;
    }


    public List<Car> getCarByMaxPrice(Connection conn) {
        List<Car> cars = new ArrayList<>();
        Statement statement;
        ResultSet rs = null;

        try {
            String query = ("SELECT DISTINCT ON (c.car_name)\n" +
                    "    c.id_car,\n" +
                    "    c.car_name,\n" +
                    "    c.model,\n" +
                    "    c.price,\n" +
                    "    c.color,\n" +
                    "    c.motor_type,\n" +
                    "    c.power,\n" +
                    "    c.place_number,\n" +
                    "    c.status,\n" +
                    "    c.type_car,\n" +
                    "    i.url\n" +
                    "FROM \n" +
                    "    car c\n" +
                    "INNER JOIN image i \n" +
                    "ON i.id_car = c.id_car\n" +
                    "INNER JOIN (\n" +
                    "    SELECT \n" +
                    "        car_name,\n" +
                    "        MAX(price) AS max_price\n" +
                    "    FROM \n" +
                    "        car\n" +
                    "    GROUP BY \n" +
                    "        car_name\n" +
                    ") max_prices ON c.car_name = max_prices.car_name AND c.price = max_prices.max_price\n" +
                    "ORDER BY \n" +
                    "    c.car_name;");

            statement = conn.createStatement();
            rs = statement.executeQuery(query);

            while (rs.next()) {
                cars.add(new Car(
                        rs.getInt("id_car"),
                        rs.getString("car_name"),
                        rs.getString("model"),
                        rs.getFloat("price"),
                        rs.getString("color"),
                        rs.getString("motor_type"),
                        rs.getString("power"),
                        rs.getInt("place_number"),
                        rs.getString("status"),
                        rs.getString("type_car"),
                        rs.getString("url")
                ));
            }
        } catch (Exception e) {
            throw new RuntimeException("fix it: ", e);
        }

        return cars;
    }

    public void changeStatusCar(Connection conn, String status, int idCar) {
        Statement statement;
        try {
            String query = String.format("update car set status='%s' where id_car='%s';", status, idCar);
            statement = conn.createStatement();
            statement.executeUpdate(query);
            System.out.println("Status Car update  ✔");

        } catch (Exception message) {
            throw new RuntimeException("fix it : ", message);
        }
    }
    public void changeStatusAppointment(Connection conn, String status, int idAppointment) {
        Statement statement;
        try {
            String query = String.format("update appointement set status='%s' where id_car='%s';", status, idAppointment);
            statement = conn.createStatement();
            statement.executeUpdate(query);
            System.out.println("Status Appointment update  ✔");

        } catch (Exception message) {
            throw new RuntimeException("fix it : ", message);
        }
    }

    public void addAppointment(Connection conn, Appointment appointment) {
        Statement statement;
        try {
            String query = String.format("" +
                            "insert into appointement(name,first_name,email," +
                            "contact,message,appointement_date," +
                            "status,id_car)values('%s','%s','%s','%s','%s','%s','%s','%s');"
                    , appointment.getName()
                    , appointment.getFirstName()
                    , appointment.getEmail()
                    , appointment.getContact()
                    , appointment.getMessage()
                    , "now()"
                    , "Pinned", appointment.getIdCar());
            statement = conn.createStatement();
            statement.executeUpdate(query);
            System.out.println("Appointment save ✔");
        } catch (Exception error) {
            throw new RuntimeException("fix it : ", error);
        }
    }

    public List<Appointment> getAllAppointment(Connection conn) {
        List<Appointment> appointments = new ArrayList<>();
        Statement statement;
        ResultSet rs = null;
        try {
            String query = String.format("select * from appointement;");
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
            while (rs.next()) {
                appointments.add(new Appointment(
                        rs.getString("name"),
                        rs.getString("first_name"),
                        rs.getString("email"),
                        rs.getString("contact"),
                        rs.getString("message"),
                        rs.getString("appointement_date"),
                        rs.getString("status"),
                        rs.getInt("id_car")
                ));
            }


        } catch (Exception e) {
            throw new RuntimeException("fix it : ", e);
        }
        return appointments;
    }

}
