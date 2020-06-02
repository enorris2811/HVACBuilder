  public class BFooView extends BHxView {
      public static final BFooView INSTANCE = new BFooView();
      public Type getType() {
          return TYPE;
      }
      public static final Type TYPE = Sys.loadType(BFooView.class);
      protected BFooView() {}
      public void write(HxOp op) throws Exception {
          BFoo foo = (BFoo) op.get();
          HtmlWriter out = op.getHtmlWriter();
          out.w("Current name: ").w(foo.getName()).w("<br/>");
          out.w("<input type='text' name='").w(op.scope("name")).w("'");
          out.w(" value='").w(foo.getName()).w("' /><br/>");
          out.w("<input type='submit' value='Submit' />");
      }
      public BObject save(HxOp op) throws Exception {
          BFoo foo = (BFoo) op.get();
          foo.setName(op.getFormValue("name"));
          return foo;
      }
  }


  public void write(HxOp op) throws Exception {
      HtmlWriter out = op.getHtmlWriter();
      out.w("<input type='text' name='").w(op.scope("foo")).w("'/>");
  }
  public BObject save(HxOp op) throws Exception {
      String foo = op.getFormValue("foo")
  }

  /* * Copyright 2000 Tridium, Inc. All Rights Reserved. */
  package javax.baja.sys;
  import java.io.*; /** * The BInteger is the wrapper class for Java primitive * int objects. */
  public final class BInteger extends BNumber {
      public static BInteger make(int value) {
          if (value == 0) return DEFAULT;
          return new BInteger(value);
      }
      private BInteger(int value) {
          this.value = value;
      }
      public int getInt() {
          return value;
      }
      public float getFloat() {
          return (float) value;
      }
      public int hashCode() {
          return value;
      }
      public boolean equals(Object obj) {
          if (obj instanceof BInteger) return ((BInteger) obj).value == value;
          return false;
      }
      public String toString(Context context) {
          return String.valueOf(value);
      }
      public void encode(DataOutput out) throws IOException {
          out.writeInt(value);
      }
      public BObject decode(DataInput in ) throws IOException {
          return new BInteger( in .readInt());
      }
      public String encodeToString() throws IOException {
          return String.valueOf(value);
      }
      public BObject decodeFromString(String s) throws IOException {
          try {
              return new BInteger(Integer.parseInt(s));
          } catch (Exception e) {
              throw new IOException("Invalid integer: " + s);
          }
      }
      public static final BInteger DEFAULT = new BInteger(0);
      public Type getType() {
          return TYPE;
      }
      public static final Type TYPE = Sys.loadType(BInteger.class);
      private int value;
  }
  /* * Copyright 2000 Tridium, Inc. All Rights Reserved. */
  package javax.baja.ui.enum;
  import javax.baja.sys.*; /** * BOrientation defines a widget's orientation as * either horizontal or vertical. */
  public final class BOrientation extends BFrozenEnum {
      public static final int HORIZONTAL = 0;
      public static final int VERTICAL = 1;
      public static final BOrientation horizontal = new BOrientation(HORIZONTAL);
      public static final BOrientation vertical = new BOrientation(VERTICAL);
      public Type getType() {
          return TYPE;
      }
      public static final Type TYPE = Sys.loadType(BOrientation.class);
      public static BOrientation make(int ordinal) {
          return (BOrientation) horizontal.getRange().get(ordinal);
      }
      public static BOrientation make(String tag) {
          return (BOrientation) horizontal.getRange().get(tag);
      }
      private BOrientation(int ordinal) {
          super(ordinal);
      }
  }

  boolean property: fooBar public static final Property fooBar = newProperty(0, true);
  public boolean getFooBar() {
      return getBoolean(fooBar);
  }
  public void setFooBar(boolean v) {
      setBoolean(fooBar, v);
  }
  int property: cool public static final Property cool = newProperty(0, 100);
  public int getCool() {
      return getInt(cool);
  }
  public void setCool(int v) {
      setInt(cool, v);
  }
  double property: analog public static final Property analog = newProperty(0, 75.0);
  public double getAnalog() {
      return getDouble(analog);
  }
  public void setAnalog(double v) {
      setDouble(analog, v);
  }
  float property: description public static final Property description = newProperty(0, "describe me");
  public String getDescription() {
      return getString(description);
  }
  public void setDescription(String x) {
      setString(description, v);
  }
  BObject property: timestamp public static final Property timestamp = newProperty(0, BAbsTime.DEFAULT);
  public BAbsTime getTimestamp() {
      return (BAbsTime) get(timestamp);
  }
  public void setTimestamp(BAbsTime v) {
      set(timestamp, v);
  }


  action: makeMyDay public static final Action makeMyDay = newAction(0);
  public void makeMyDay() {
      invoke(makeMyDay, null, null);
  }
  public void doMakeMyDay() {
      System.out.println("Make my day!");
  }
  action: increment public static final Action increment = newAction(0, new BInteger(1));
  public BInteger increment(BInteger v) {
      return (BInteger) invoke(increment, v, null);
  }
  public BInteger doIncrement(BInteger i) {
      return new BInteger(i.getInt() + 1);
  }